import { GoPlay } from "react-icons/go";
import { TbLock } from "react-icons/tb";
const Chapter = (params) => {
    let changeActiveId = params.changeActiveId

    const handleClick = () => {
        if (!params.isLocked) {
            changeActiveId(params.id);
        }

    };
    return (
        <div onClick={handleClick} className={params.isLocked ? " locked" : params.active ? "chapter-item active" : 'chapter-item'}>
            {params.isLocked
                ?
                <TbLock style={{ fontSize: '32px', marginRight: '8px' }} />
                :
                <GoPlay style={{ fontSize: '32px', marginRight: '8px' }} />
            }


            <div>{params.title}</div>
        </div>
    )
}

export default Chapter