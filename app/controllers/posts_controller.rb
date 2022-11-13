class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC") # 降順（新しい順）
  end

  # def new
  # end

  def create
    Post.create(content: params[:content])
  end
end
