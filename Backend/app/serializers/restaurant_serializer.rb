class RestaurantSerializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :name, :address, :category, :closing_time, :opening_time, :price_range, :image

  # include Rails.application.routes.url_helpers
    
  # attributes :image
    
  def image
      rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
