export function getAllPostIds() {
  const names =  
  [
    {
      params: {
        username: 'ssg-ssr'
      }
    },
    {
      params: {
        username: 'pre-rendering'
      }
    }
  ]
  
  return names
}

export function getPostData(username) {
  const data = {
    title: 'Thoả thuận trị giá 12 tỷ USD của Google - Apple',
    content: 'Mỗi năm Google trả cho Apple 12 tỷ USD, bằng 1/5 tổng lợi nhuận mỗi năm của Apple, để được là công cụ tìm kiếm độc quyền trên iPhone.',
  }
  return data
}