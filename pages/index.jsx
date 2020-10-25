import Layout from "@components/Layout/main"

function HomePage() {
	const cards = [
		{
			title: "The Coldest Sunset",
			tags: ["photography", "travel", "winter"],
			img: "card-top.jpg",
			content: "Bali is known as the Island of the Gods for a reason.It’s one of 17, 500 islands in the Indonesian archipelago, yet even among its colorful neighbors..."
		},
		{
			title: "Champions of Europa 2020",
			tags: ["football", "bundesliga", "champions league"],
			img: "bayern.jpg",
			content: "Bayern Munich are finally moving away from Pep Guardiola's patented 'Tiki-Taka' style of football, according to Phillip Lahm, who says their latest Champions League triumph marks the start of a new era."
		},
		{
			title: "Fashion trending",
			tags: ["fashion", "men", "trends"],
			img: "GQ.jpg",
			content: "In his 1989 classic Back To The Future II, filmmaker Robert Zemeckis attempted to predict what the world might look like 30 years ahead and in fashion terms, he wasn’t massively far out. Self-lacing Nikes, automatically heated jackets, virtual reality shades – sure, they might still be in the prototype stage or not work as slickly as intended, but they’re there. We have them. We are the future."
		},
		{
			title: "COVID-19 pandemic",
			tags: ['corona', 'virus', 'covid19', 'pandemic'],
			img: 'corona-virus.jpg',
			content: "Coronavirus has left countries such as Tunisia facing serious economic hardship and unemployment, while others, including Libya, are dealing with the effects of war. That's led to an increase in sea arrivals this year in countries including Italy and Malta, according to figures from the United Nations High Commissioner for Refugees(UNHCR).Arrivals in southeastern Europe are also up on 2019, mostly from Syria, followed by Morocco and Iraq."
		},
		{
			title: "Thủ tướng Abe: Tôi xin lỗi từ tận đáy lòng",
			tags: ["news", "japan", "world"],
			img: "abe.jpg",
			content: "Thủ tướng Shinzo Abe cho biết ông đã giữ được sức khỏe ổn định trong gần 8 năm qua, nhưng đến tháng 6 bệnh có dấu hiệu tái phát."
		},
		{
			title: 'Porsche Panamera 2021 ra mắt, phiên bản Turbo S 620 mã lực',
			tags: ['car', 'supercar', 'panamera', 'v8-engine'],
			img: 'porsche.jpg',
			content: 'Porsche Panamera phiên bản nâng cấp giữa vòng đời được ra mắt trên sóng online, thay đổi trọng tâm trên mẫu xe thể thao gia đình này đó chính là hiệu suất của động cơ tiếp tục được nâng cấp lên một tầm cao mới. Đặc biệt là sự ra đời của phiên bản Panamera Turbo S thay thế cho phiên bản Panamera Turbo tiền nhiệm với công suất tối đa đạt 620 mã lực (463kW), tăng 70 mã lực so với phiên bản trước, đồng thời các phiên bản khác cũng được nâng cấp sức mạnh và thay đổi trong thiết kế nội thất mới.'
		},
		{
			title: 'Apple tung video mới “đầy sao” để quảng cáo cho Apple Music',
			tags: ['apple', 'music'],
			img: 'apple-music.jpg',
			content: 'Apple mới đây vừa chia sẻ một video mới để quảng bá cho dịch vụ Apple Music. Đoạn video được kết hợp nhiều dòng nhạc đang hot hiện nay, cũng như có sự góp mặt của dàn sao “khủng” như Billie Eilish, Anderson .Paak, Megan Thee Stallion và nhiều nghệ sỹ nổi tiếng khác. Trong video là ca khúc “Nvdity Worldwide” của NVDES & Khadyak, đi kèm cùng một số hình ảnh hài hước trong văn phòng của Zane Lowe.'
		},
		{
			title: 'What to eat',
			tags: ['food', 'foodporn', 'pizza', 'mozzarella'],
			img: 'pizza.jpg',
			content: "It's weekend and still wondering where and what to eat? We suggest some fine dining place and if you ever feel like to practice social distancing, you can even try out at home with our recipe"
		},

	]

	const renderContent = () => {
		return (
			<div className='block sm:grid sm:grid-flow-row-dense sm:grid-cols-3 md:grid-cols-4 sm:grid-rows-2 sm:gap-4'>
				{cards.map(card => (
					<div
						className='rounded overflow-hidden shadow-lg mb-4 mx-2'
						key={card.title}
					>
						<img className='h-32 w-full object-cover' src={`/images/${card.img}`} />
						<div className='px-6 py-2'>
							<div className='font-bold text-xl mb-2'>{card.title}</div>
							<p className='text-gray-700 text-base line-clamp'>
								{card.content.trim().slice(0, 150) + '...'}
							</p>
						</div>
						<div className='flex flex-wrap px-4 py-2'>
							{card.tags.map(tag => (
								<span
									key={tag}
									className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		)
	}

	return <Layout content={renderContent()} />
}

export default HomePage