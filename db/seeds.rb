# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Board.destroy_all
BoardMembership.destroy_all
List.destroy_all

u1 = User.create!(
    username: 'Edmund',
    password: 'hunter12'
)
  
u2 = User.create!(
    username: 'Annette',
    password: 'helltaker'
)

u3 = User.create!(
    username: 'Bernie',
    password: 'incredible'
)

u4 = User.create!(
    username: 'Misha',
    password: 'HeavyWeapons'
)

u5 = User.create!(
    username: 'Jermey',
    password: 'grassgrows'
)

b1 = Board.create!(title: 'Building the Azure Cub Inn', owner_id: 2, visibility: true)
b2 = Board.create!(title: 'Renovate the Golden Fawn Cafe', owner_id: 1, visibility: true)
b3 = Board.create!(title: 'Planning a dinner in the Screaming Fledglings', owner_id: 3, visibility: false)
b4 = Board.create!(title: 'Planning a church party', owner_id: 1, visibility: false)
b5 = Board.create!(title: 'Dinner at Finn\'s House', owner_id: 2, visibility: false)
b6 = Board.create!(title: 'Cooking French Toast', owner_id: 4, visibility: true)
b7 = Board.create!(title: 'Eating People\'s Sandwiches', owner_id: 5, visibility: true)
b8 = Board.create!(title: 'Going to a Steak dinner with GF', owner_id: 5, visibility: false)
b9 = Board.create!(title: 'Planning for Sasha\'s birthday', owner_id: 4, visibility: false)
b10 = Board.create!(title: 'Self-isolate with my plant buddy', owner_id: 3, visibility: false)

bm1 = BoardMembership.create!(board_id: 3, user_id: 1)
bm2 = BoardMembership.create!(board_id: 4, user_id: 1)
bm3 = BoardMembership.create!(board_id: 9, user_id: 2)
bm4 = BoardMembership.create!(board_id: 5, user_id: 4)
bm5 = BoardMembership.create!(board_id: 10, user_id: 1)
bm6 = BoardMembership.create!(board_id: 5, user_id: 3)
bm7 = BoardMembership.create!(board_id: 5, user_id: 5)
bm8 = BoardMembership.create!(board_id: 4, user_id: 2)
bm9 = BoardMembership.create!(board_id: 9, user_id: 1)
bm10 = BoardMembership.create!(board_id: 3, user_id: 2)
bm11 = BoardMembership.create!(board_id: 1, user_id: 2)
bm12 = BoardMembership.create!(board_id: 2, user_id: 1)
bm13 = BoardMembership.create!(board_id: 3, user_id: 3)
bm14 = BoardMembership.create!(board_id: 5, user_id: 2)
bm15 = BoardMembership.create!(board_id: 6, user_id: 4)
bm16 = BoardMembership.create!(board_id: 7, user_id: 5)
bm17 = BoardMembership.create!(board_id: 8, user_id: 5)
bm18 = BoardMembership.create!(board_id: 9, user_id: 4)
bm19 = BoardMembership.create!(board_id: 10, user_id: 3)

l1 = List.create!(title: 'Test List', board_id: 4)
l2 = List.create!(title: 'Test List 2', board_id: 4)
l3 = List.create!(title: 'Test List 3', board_id: 2)
l4 = List.create!(title: 'Test List 4', board_id: 2)