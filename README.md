#todo-app DB設計

##  usersテーブル  
｜Column｜Type｜Options｜
|------|----|------|
|name |string|null: false|
|e-mail|string|null: false|
|password-confimation|string|null: false|

### Association
- has_many :lists

## listsテーブル
｜Column｜Type｜Options｜
|------|----|------|
|title|string|null: false|
|user_id|integer|null: false,foreign_key:true|

### Association
- has_many :cards
- belongs_to :user


## cardsテーブル
｜Column｜Type｜Options｜
|------|----|------|
|task|string|null: false|
|content|string|-------|
|list_id|integer|null: false,foreign_key:true|

### Association
- belongs_to :list