Rails.application.routes.draw do
  namespace :api do
    resources :stores do
      resources :items do
      end 
    end
end
