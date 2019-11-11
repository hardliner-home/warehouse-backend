class User < ApplicationRecord
  # before_action :authenticate_user!
  has_many :warehouses
  has_many :stores
  has_many :orders
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :rememberable, :trackable, :recoverable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :validatable


  def has_warehouses?
    warehouses.any?
  end

  def has_stores?
    stores.any?
  end

end
