Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/index'
      get 'users/create'
      get 'users/show/:id', to: 'users#show'
      get 'users/destroy'
    end
  end
  devise_for :users do
    get 'users/new'
    delete '/users/sign_out' => 'devise/sessions#destroy' #I've also tried get instead of delete

  end
  
  namespace :api do
    namespace :v1 do
      get 'articles/index'
      post 'articles/create'
      get 'article/show/:id', to: 'articles#show'
      delete '/destroy/:id', to: 'articles#destroy'
     
    end
  end
  
  namespace :api do
    namespace :v1 do
      get 'books/index'
      post 'books/create'
      get 'show/:id' , to: 'books#show'
      delete '/destroy/:id', to: 'books#destroy'
    end
  end

  get '/*path' => 'homepage#index'
root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end


     
      