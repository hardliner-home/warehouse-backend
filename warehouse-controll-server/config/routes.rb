Rails.application.routes.draw do

  devise_for :users
  get 'home' => 'home#home'
  root 'welcome#welcome˝'
end