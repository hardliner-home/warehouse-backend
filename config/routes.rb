Rails.application.routes.draw do
  get 'not_found/notFound'
  devise_for :users

  resources :warehouses do
    resources :products
  end

  resources :stores do
    resources :products
  end

  resources :stores do
    resources :orders
  end

  resources :orders

  get 'home' => 'home#home'

  get 'page-not-found' => 'not_found#notFound'

  root 'welcome#welcome'
end