Rails.application.routes.draw do
  devise_for :users

  resource :warehouses
  resource :stores

  get 'home' => 'home#home'

  root 'welcome#welcome'
end