import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductImg from "./ProductImg";
import ThumbImg from "./ThumbImg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

function ProductCarousel() {
	let [bigImg, setBigImg] = useState({
		src: "src/features/product/images/image-product-1.jpg",
		id: 1,
	});

	function handleThumbClick(imgSrc) {
		let correctImg = imgSrc.replace("-thumbnail", "");
		let imgId = correctImg.substring(
			correctImg.indexOf(".") - 1,
			correctImg.indexOf(".")
		);

		setBigImg({
			src: correctImg,
			id: imgId,
		});
	}

	const thumbImgsSrc = Object.values(
		import.meta.glob("../images/image-product-*.jpg", { eager: true })
	)
		.map((img) => img.default)
		.filter((img) => !img.includes("-thumbnail"));

	const miniImgs = Object.values(
		import.meta.glob("../images/image-product-*-thumbnail.jpg", {
			eager: true,
		})
	).map((img) => img.default);

	const swiperSlides = thumbImgsSrc.map((img, index) => (
		<SwiperSlide key={index}>
			<ProductImg imgSrc={img} />
		</SwiperSlide>
	));

	let isPc = window.innerWidth >= 1024;

	if (isPc) {
		return (
			<div className="shrink-0">
				<img
					className="w-[380px] rounded-lg 2xl:w-[500px]"
					src={bigImg.src}
					alt="Big Image"
				/>

				<div className="mt-5 flex flex-wrap space-x-3 space-y-3 max-w-[380px] 2xl:max-w-[500px]">
					{miniImgs.map((img, index) => {
						return (
							<ThumbImg
								isSelected={bigImg.id == index + 1}
								key={index}
								onClick={(e) => {
									handleThumbClick(img, e);
								}}
								imgSrc={img}
							/>
						);
					})}
				</div>
			</div>
		);
	}

	return (
		<div className="relative">
			<Swiper
				modules={[Navigation, Pagination]}
				navigation={{
					nextEl: ".navigation-next",
					prevEl: ".navigation-prev",
				}}
				pagination={{ clickable: true }}
				loop="true"
				spaceBetween={50}
				slidesPerView={1}>
				{swiperSlides}
			</Swiper>

			<button class="navigation-next absolute right-5 top-1/2 -translate-y-1/2 z-10">
				<div className="bg-white p-2 w-[45px] rounded-full aspect-square flex justify-center items-center">
					<img
						src="src/features/product/icons/icon-next.svg"
						alt="Next Image"
					/>
				</div>
			</button>

			<button class="navigation-prev absolute left-5 top-1/2 -translate-y-1/2 z-10">
				<div className="bg-white p-2 w-[45px] rounded-full aspect-square flex justify-center items-center">
					<img
						src="src/features/product/icons/icon-previous.svg"
						alt="Previous Image"
					/>
				</div>
			</button>
		</div>
	);
}

export default ProductCarousel;
