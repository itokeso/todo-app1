# README

## アプリケーション概要
.todoリストを簡単に作成できるアプリです。

## 制作背景
　私は自分がやるべきことをメモで書きながら実行していましたが、メモを無くしたり、どこに書いたか分からなくなったりすることも多く、そのような手間を削減するためにアプリを通して実現できないかを考えTODO-APPを作ってみようと考え、タスク管理アプリである「torello」を参考に実装を進めました！

## 工夫・苦労したところ
　ただやるべきことを記入できるだけではなく、リストに関係する詳細やメモを残すことでどのようにこのタスクを終了するべきかを簡単に理解できる仕様とすることを心がけました！
また今回はCSSフレームワークであるBootstrapを勉強のために取り入れ、出来るだけフロントの実装を簡単にできるようにしました！
苦労したところはリストに紐づいたカードをeach文を使い取り出す際に上手くビューに反映させることが出来ずに苦労しましたがqiitaなどで他の方々の記述を参考にして何とか実装することが出来ました！
また本番環境では特定のユーザーだけがアプリケーションを使用できるようにBasic認証をかけております！

## 課題
　課題としては、現状一人で使う個人用のアプリになってしまっているのでグループで編集をできるようにする、タスクがどのくらいの進捗状況にあるかを分かるようにするなどの機能を実装できればと思います、またBootstrapの使い方に慣れずに実際にはhtmlやcssを多用してしまっているのでもう少し簡単に記述できるようにBootstrapを使いこなして行きたいと思います！

## アプリケーションの機能一覧
・ユーザー新規登録機能<br>
・ユーザーログイン・ログアウト機能<br>
・リスト（やる事）作成機能<br>
・カード（詳細）作成機能<br>
・リスト・カード編集機能<br>
・リスト・カード削除機能<br>


## 使用技術一覧
|種別|名称|
|------|----|
|開発言語|Ruby(ver 2.5.1)|
|フレームワーク|Ruby on Rails(ver 5.2.4.1) ,Bootstrap(ver 4.3.1)|
|マークアップ|HTML,CSS(Sass)|
|データベース|MYSQL|
|本番環境|AWS|

## 本番環境
. http://54.92.67.93/

テストアカウント<br>
・メールアドレス：　test@test<br>
・パスワード：　　  000000

![スクリーンショット 2020-03-29 22 58 41](https://user-images.githubusercontent.com/61177741/77851048-8fc0a900-7211-11ea-839a-d01b4357e675.png)
![スクリーンショット 2020-03-29 22 59 44](https://user-images.githubusercontent.com/61177741/77851051-93543000-7211-11ea-9b6f-dff586f8612b.png)
![スクリーンショット 2020-03-29 22 59 17](https://user-images.githubusercontent.com/61177741/77851054-95b68a00-7211-11ea-9b96-d8af478d1823.png)

# DEMO
![](https://raw.github.com/wiki/itokeso/todo-app1/gif/image1.gif)
![](https://raw.github.com/wiki/itokeso/todo-app1/gif/image2.gif)



# todo-app DB設計

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


