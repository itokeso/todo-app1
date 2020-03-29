# README

## アプリケーション概要
.todoリストを簡単に作成できるアプリです。

## アプリケーションの機能一覧
・ユーザー新規登録機能
・ユーザーログイン・ログアウト機能
・リスト（やる事）作成機能
・カード（詳細）作成機能
・リスト・カード編集機能
・リスト・カード削除機能

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