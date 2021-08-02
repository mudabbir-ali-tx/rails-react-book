class Api::V1::BooksController < ApplicationController
	before_action :book, only: [:show, :edit, :update, :destroy]
	before_action :authenticate_user!, only: [:new, :edit]

  def index
    @book = Book.all.order(created_at: :desc)
    render json: book
  end
  def create
    
		# @book = current_user.book.build(book_params)
    book = Book.create!(book_params)    
		
    if book
      render json: book
    else
      render json: book.errors
    end 

  end

  def show
    if book
      render json: book
    else
      render json: book.errors
    end
  end

  def destroy
    @book&.destroy
    render json: { message: 'Book deleted!' }
  end

  private

  def book_params
    params.permit(:name, :image, :author, :description)
  end

  def book
    @book ||= Book.find(params[:id])



  end


end



