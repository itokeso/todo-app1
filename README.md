# README

## アプリケーション概要
.todoリストを簡単に作成できるアプリです。

## アプリケーションの機能一覧
・ユーザー新規登録機能<br>
・ユーザーログイン・ログアウト機能<br>
・リスト（やる事）作成機能<br>
・カード（詳細）作成機能<br>
・リスト・カード編集機能<br>
・リスト・カード削除機能<br>

##使用技術一覧
|種別|名称|
|------|----|
|開発言語|Ruby(ver 2.5.1)|
|フレームワーク|Ruby on Rails(ver 5.2.4.1) ,Bootstrap(ver 4.3.1)|
|マークアップ|HTML,CSS(Sass)|
|データベース|MYSQL|

![スクリーンショット 2020-03-29 22 58 41](https://user-images.githubusercontent.com/61177741/77851048-8fc0a900-7211-11ea-839a-d01b4357e675.png)
![スクリーンショット 2020-03-29 22 59 44](https://user-images.githubusercontent.com/61177741/77851051-93543000-7211-11ea-9b6f-dff586f8612b.png)
![スクリーンショット 2020-03-29 22 59 17](https://user-images.githubusercontent.com/61177741/77851054-95b68a00-7211-11ea-9b96-d8af478d1823.png)

#todo-app DB設計

##  usersテーブル  

|Column|Type|Options|
|------|----|-------|
| name | string | null: false |<br>　　
| e-mail | string | null: false |<br>
| password-confimation | string | null: false |<br>

### Association
- has_many :lists

## listsテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false|<br>
|user_id|integer|null: false,foreign_key:true|<br>

### Association
- has_many :cards<br>
- belongs_to :user<br>


## cardsテーブル
|Column|Type|Options|
|------|----|-------|
|task|string|null: false|<br>
|content|string|-------|<br>
|list_id|integer|null: false,foreign_key:true|<br>

### Association
- belongs_to :list


