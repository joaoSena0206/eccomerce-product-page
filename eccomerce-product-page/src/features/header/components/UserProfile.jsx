import userAvatar from "../images/image-avatar.png";

function UserProfile() {
	return (
		<img
			className="w-[25px] h-[25px] cursor-pointer"
			src={userAvatar}
			alt="Mobile Menu"
		/>
	);
}

export default UserProfile;
