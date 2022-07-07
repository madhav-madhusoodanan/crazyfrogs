const Button = ({ label, link }) => (
    <a href={link}>
        <div className="mx-auto text-center button w-max text-black font-medium">
            {/* <BiChevronRight fontSize={40} /> */}
            {label}
        </div>
    </a>
)
export default Button