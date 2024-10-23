import './Home.css'

function Home() {
    return (
        <div className="home">
            <img src="./public/human.png" alt="" />
            <div className="text">
                ชื่อ : ธนวรรธ ไคล้สา &nbsp; &nbsp;  ชื่อเล่น : ทิว <br /> <br />
                รหัสนักศึกษา : 66073501 <br /> <br />
                อายุ : 20 ปี &nbsp; &nbsp; เกิดวันที่ : 6 ธันวาคม 2567 <br />
            </div>
            <div className="text2">
                กำลังศึกษาอยู่ที่มหาวิทยาลัยศรีปทุม คณะเทคโนโลยีสารสนเทศ สาขาวิทยาการคอมพิวเตอร์ ในชั้นปีที่ 2<br />
            </div>
        </div>
    )
}

export default Home