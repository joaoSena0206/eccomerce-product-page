import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductImg from "./ProductImg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductCarousel() {
	const thumbImgsSrc = Object.values(
		import.meta.glob("../images/image-product-*.jpg", { eager: true })
	)
		.map((img) => img.default)
		.filter((img) => !img.includes("-thumbnail"));

	const swiperSlides = thumbImgsSrc.map((img, index) => (
		<SwiperSlide key={index}>
			<ProductImg imgSrc={img} />
		</SwiperSlide>
	));

	return (
		<div className="relative">
			<Swiper
				modules={[Navigation, Pagination]}
				navigation={{
					nextEl: ".navigation-next",
					prevEl: ".navigation-prev"
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
