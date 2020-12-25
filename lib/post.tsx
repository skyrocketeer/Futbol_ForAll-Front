export function getAllPosts() {
  const data = [
		{
			id: 1,
			title: "The Coldest Sunset",
			tags: ["photography", "travel", "winter"],
			img: "card-top.jpg",
			content: "Bali is known as the Island of the Gods for a reason.It’s one of 17, 500 islands in the Indonesian archipelago, yet even among its colorful neighbors..."
		},
		{
			id: 2,
			title: "Champions of Europa 2020",
			tags: ["football", "bundesliga", "champions league"],
			img: "bayern.jpg",
			content: "Bayern Munich are finally moving away from Pep Guardiola's patented 'Tiki-Taka' style of football, according to Phillip Lahm, who says their latest Champions League triumph marks the start of a new era."
		},
		{
			id: 3,
			title: "Fashion trending",
			tags: ["fashion", "men", "trends"],
			img: "GQ.jpg",
			content: "In his 1989 classic Back To The Future II, filmmaker Robert Zemeckis attempted to predict what the world might look like 30 years ahead and in fashion terms, he wasn’t massively far out. Self-lacing Nikes, automatically heated jackets, virtual reality shades – sure, they might still be in the prototype stage or not work as slickly as intended, but they’re there. We have them. We are the future."
		},
		{
			id: 4,
			title: "COVID-19 pandemic",
			tags: ['corona', 'virus', 'covid19', 'pandemic'],
			img: 'corona-virus.jpg',
			content: "Coronavirus has left countries such as Tunisia facing serious economic hardship and unemployment, while others, including Libya, are dealing with the effects of war. That's led to an increase in sea arrivals this year in countries including Italy and Malta, according to figures from the United Nations High Commissioner for Refugees(UNHCR).Arrivals in southeastern Europe are also up on 2019, mostly from Syria, followed by Morocco and Iraq."
		},
		{
			id: 5,
			title: "Thủ tướng Abe: Tôi xin lỗi từ tận đáy lòng",
			tags: ["news", "japan", "world"],
			img: "abe.jpg",
			content: "Thủ tướng Shinzo Abe cho biết ông đã giữ được sức khỏe ổn định trong gần 8 năm qua, nhưng đến tháng 6 bệnh có dấu hiệu tái phát."
		},
		{
			id: 6,
			title: 'Porsche Panamera 2021 ra mắt, phiên bản Turbo S 620 mã lực',
			tags: ['car', 'supercar', 'panamera', 'v8-engine'],
			img: 'porsche.jpg',
			content: 'Porsche Panamera phiên bản nâng cấp giữa vòng đời được ra mắt trên sóng online, thay đổi trọng tâm trên mẫu xe thể thao gia đình này đó chính là hiệu suất của động cơ tiếp tục được nâng cấp lên một tầm cao mới. Đặc biệt là sự ra đời của phiên bản Panamera Turbo S thay thế cho phiên bản Panamera Turbo tiền nhiệm với công suất tối đa đạt 620 mã lực (463kW), tăng 70 mã lực so với phiên bản trước, đồng thời các phiên bản khác cũng được nâng cấp sức mạnh và thay đổi trong thiết kế nội thất mới.'
		},
		{
			id: 7,
			title: 'Apple tung video mới “đầy sao” để quảng cáo cho Apple Music',
			tags: ['apple', 'music'],
			img: 'apple-music.jpg',
			content: 'Apple mới đây vừa chia sẻ một video mới để quảng bá cho dịch vụ Apple Music. Đoạn video được kết hợp nhiều dòng nhạc đang hot hiện nay, cũng như có sự góp mặt của dàn sao “khủng” như Billie Eilish, Anderson .Paak, Megan Thee Stallion và nhiều nghệ sỹ nổi tiếng khác. Trong video là ca khúc “Nvdity Worldwide” của NVDES & Khadyak, đi kèm cùng một số hình ảnh hài hước trong văn phòng của Zane Lowe.'
		},
		{
			id: 8,
			title: 'What to eat',
			tags: ['food', 'foodporn', 'pizza', 'mozzarella'],
			img: 'pizza.jpg',
			content: "It's weekend and still wondering where and what to eat? We suggest some fine dining place and if you ever feel like to practice social distancing, you can even try out at home with our recipe"
		},
		{
			id: 9,
			title: 'Nintendo có... một cái đồng hồ chơi được Mario',
			tags: ['nintendo-switch', 'game', 'console', 'mario'],
			img: 'Nintendo5.jpg',
			content: " Nintendo, để ăn mừng kỷ niệm 35 năm ngày phiên bản Super Mario Bros đầu tiên được ra mắt trên nền máy Famicom, đã tung ra một cái đồng hồ để bàn chơi được Mario. Sẽ có người nghĩ rằng thời điểm ra mắt Game & Watch: Super Mario Bros. của Nintendo hơi hớ hênh vì khi đó mọi người đều sẽ chỉ quan tâm tới hai chiếc console next gen vừa ra mắt. Nhưng thật ra lịch sử của Nintendo trước giờ vẫn vậy, mặc kệ thị trường, một mình một hướng đi riêng."
		},
  ]
  
  return data
}