class PharmacistSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :email, :isEnrolled, :pharmacy_id
end
