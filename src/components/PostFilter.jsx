import MainInput from './UI/input/MainInput';
import MainSelect from './UI/select/MainSelect';

const PostFilter = ({ filter, setFilter, }) => {
    let options = [
        { value: 'title', body: 'По названию' },
        { value: 'body', body: 'По описанию' },
    ]

    return (
        <div>
            <MainInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder='Поиск...'></MainInput>
            <MainSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='Сортировка по ...'
                options={options} />
        </div>
    )
}

export default PostFilter;