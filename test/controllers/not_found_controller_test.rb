require 'test_helper'

class NotFoundControllerTest < ActionDispatch::IntegrationTest
  test "should get notFound" do
    get not_found_notFound_url
    assert_response :success
  end

end
