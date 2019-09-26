class User < ApplicationRecord
  # before_action :authenticate_user!
  has_many :warehouse
  has_many :store
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :rememberable, :trackable, :recoverable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :validatable
end
