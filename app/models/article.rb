class Article < ApplicationRecord
    validates :name, presence: true
  validates :description, presence: true
  validates :comment, presence: true
end
