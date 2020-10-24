class Restaurant < ApplicationRecord
  has_one_attached :image

  # def image_attached(size_x, size_y)
  #   if self.photos.length > 0
  #     self.photos[0].variant(resize_to_limit: [size_x, size_y]).processed
  #   else
  #     "blank.jpg"
  #   end
  # end

end
