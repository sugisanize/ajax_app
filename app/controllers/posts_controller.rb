class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC") # 降順（新しい順）
  end

  # def new
  # end

  def create
    post = Post.create(content: params[:content])
    render json:{ post: post } # postキーと値（post変数）をハッシュとしたJSONデータ形式として返却
  end
end
