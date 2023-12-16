'use client'
import { useEffect, useState } from "react";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "@hello-pangea/dnd";
import { Grip, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";

const ChapterList = ({ items, onReorder }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [chapters, setChapters] = useState(items);
    const router = useRouter()

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        setChapters(items);
    }, [items]);

    if (!isMounted) {
        return null
    }

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(chapters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        const startIndex = Math.min(result.source.index, result.destination.index);
        const endIndex = Math.max(result.source.index, result.destination.index);

        const updatedChapters = items.slice(startIndex, endIndex + 1);

        setChapters(items);

        const bulkUpdateData = updatedChapters.map((chapter) => ({
            id: chapter.id,
            position: items.findIndex((item) => item.id === chapter.id)
        }));

        onReorder(bulkUpdateData);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="chapters">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {chapters.map((chapter, index) => (
                            <Draggable
                                key={chapter.id}
                                draggableId={chapter.id.toString()}
                                index={index}
                            >
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                    >
                                        <div style={{ display: 'flex', backgroundColor: '#DEE3ED', padding: '6px', marginBottom: '16px', borderRadius: '5px', alignItems: 'center' }}>
                                            <div
                                                style={{ height: '100%' }}
                                                {...provided.dragHandleProps}
                                            >
                                                <Grip
                                                    className="h-5 w-5"
                                                />
                                            </div>
                                            <div style={{ padding: '4px', marginLeft: '10px', display: 'flex', alignItems: 'center', width: '100%' }}>
                                                {chapter.title}
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                {chapter.isFree ? <div style={{
                                                    marginRight: '12px', backgroundColor: 'blueviolet', width: '80px', fontSize: '12px', fontWeight: 'bold', height: '26px',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', borderRadius: '20px', paddingTop: '2px'
                                                }}>
                                                    Miễn phí
                                                </div> : ''}
                                                <div style={{
                                                    marginRight: '12px', backgroundColor: chapter.isPublished ? 'green' : '#59657B', width: '80px', fontSize: '12px', fontWeight: 'bold', height: '26px',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', borderRadius: '20px', paddingTop: '2px'
                                                }}>
                                                    {chapter.isPublished ?
                                                        'Công khai '
                                                        :
                                                        ' Mẫu '
                                                    }</div>

                                                <div onClick={() => { router.push(`/teacher/courses/chapter/${chapter.id}`) }} style={{ cursor: 'pointer' }}>
                                                    <Pencil style={{ marginRight: '4px' }} />
                                                </div>

                                            </div>

                                        </div>




                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}


export default ChapterList