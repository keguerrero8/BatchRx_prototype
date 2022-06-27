class MessageSerializer < ActiveModel::Serializer
  attributes :id, :text, :phoneNumber
end
