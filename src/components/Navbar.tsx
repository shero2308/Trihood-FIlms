export default function Navbar() {
    return ( 
        <div>
            <div className='flex justify-between items-center py-2 gap-2 py-r'>
                <div className='text-2xl font-bold'>Trihood Films</div>
                <div className='flex gap-4'>
                    <ul className='list-none flex gap-4'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Publishing platforms</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}