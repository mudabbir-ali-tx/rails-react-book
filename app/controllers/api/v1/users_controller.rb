class Api::V1::UsersController < ApplicationController


    def   index
        @users =User.all 
        render json: @users
    end
def create
    

    @user = User.create(user_params)
    render json: @user, status: :created
end

private

def user_params
    params.require(:user).permit(:usrname, :encrypted_password , :email)
end
