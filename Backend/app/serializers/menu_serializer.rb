class MenuSerializer < ActiveModel::Serializer
  attributes :id, :appetizers, :entrees, :desserts, :drinks, :description
end
