class Article < ApplicationRecord
# belongs_to :user
  
    validates :name, presence: true
  validates :description, presence: true
  validates :comment, presence: true
end
