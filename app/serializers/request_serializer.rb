class RequestSerializer < ActiveModel::Serializer
  attributes :id, :phone_number, :med_name, :med_strength, :quantity, :manufacturer, :ndc, :brand
end
