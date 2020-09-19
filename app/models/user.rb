# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    attr_reader :password

    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 8, allow_nil: true}

    after_initialize :ensure_session_token

    has_many :owned_boards,
        foreign_key: :owner_id,
        class_name: :Board

    has_many :board_memberships,
        foreign_key: :user_id,
        class_name: :BoardMembership

    has_many :comments,
        foreign_key: :user_id,
        class_name: :Comment

    has_many :shared_boards,
        through: :board_memberships,
        source: :board    

    #SPIRE

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user if user.is_password?(password) && user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end


    


end
