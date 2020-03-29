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

#todo-app DB設計

##  usersテーブル  
｜Column｜Type｜Options｜<br>　　
|------|----|------|<br>
|name |string|null: false|<br>　　
|e-mail|string|null: false|<br>
|password-confimation|string|null: false|<br>

### Association
- has_many :lists

## listsテーブル
｜Column｜Type｜Options｜<br>
|------|----|------|<br>
|title|string|null: false|<br>
|user_id|integer|null: false,foreign_key:true|<br>

### Association
- has_many :cards<br>
- belongs_to :user<br>


## cardsテーブル
｜Column｜Type｜Options｜<br>
|------|----|------|<br>
|task|string|null: false|<br>
|content|string|-------|<br>
|list_id|integer|null: false,foreign_key:true|<br>

### Association
- belongs_to :list
