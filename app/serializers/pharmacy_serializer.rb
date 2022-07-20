class PharmacySerializer < ActiveModel::Serializer
  attributes :id, :phone_number, :address, :zip_code, :name
  # has_many :pharmacists
end
