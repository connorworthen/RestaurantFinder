class MenuSerializer < ActiveModel::Serializer
  attributes :id, :appetizer, :entree, :dessert, :drink
end
