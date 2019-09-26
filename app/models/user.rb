class User < ApplicationRecord
  # before_action :authenticate_user!
  has_many :warehouses
  has_many :stores
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :rememberable, :trackable, :recoverable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :validatable
end
