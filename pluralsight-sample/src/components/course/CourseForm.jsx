import * as React from 'react';
import TextInput from '../../common/TextInput';
import SelectInput from '../../common/SelectInput';

const CouseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form >
      <h1>Manage Course</h1>
      <TextInput
        name='title'
        label='Title'
        value={course.title}
        onChange={onChange}
        error={errors.title}
        ></TextInput>

      <SelectInput
        name='authorId'
        label='Author'
        value={course.authorId}
        defaultOption='Select Author'
        options={allAuthors}
        onChange={onChange} error={errors.authorId}
        ></SelectInput>

        <TextInput
        name='category'
        label='Category'
        value={course.category}
        onChange={onChange}
        error={errors.category}
        ></TextInput>

        <TextInput
        name='length'
        label='Length'
        value={course.length}
        onChange={onChange}
        error={errors.length}
        ></TextInput>

        <input 
          type="submit"
          disabled={loading}
          value={loading ? 'Saving...' : 'Save'}
          className='btn btn-primary'
          onClick={onSave}
          />
    </form>
  );
};

CouseForm.propTypes = {
  course: React.PropTypes.object.isRequired, 
  allAuthors: React.PropTypes.array, 
  onSave: React.PropTypes.func.isRequired, 
  onChange: React.PropTypes.func.isRequired, 
  loading: React.PropTypes.bool, 
  errors: React.PropTypes.object
};

export default CouseForm;