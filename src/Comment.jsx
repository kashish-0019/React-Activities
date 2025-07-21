import { useState } from 'react';

export default function Comment({addNewComment}) {
  const [formData, setFormData] = useState({
    username: '',
    remarks: '',
    rating: 5,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    
    console.log(formData);
    addNewComment(formData);
    event.preventDefault();
    setFormData({
      username: '',
      remarks: '',
      rating: 5,
    });
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Give a Comment!</h3>
      <form onSubmit={handleSubmit}>

        <div className="mb-3 row">
          <label htmlFor="username" className="col-sm-2 col-form-label">User Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="remarks" className="col-sm-2 col-form-label">Remarks</label>
          <div className="col-sm-10">
            <textarea
              id="remarks"
              name="remarks"
              className="form-control"
              rows="3"
              value={formData.remarks}
              onChange={handleInputChange}
              placeholder="Add your remarks"
              required
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="rating" className="col-sm-2 col-form-label">Rating</label>
          <div className="col-sm-10">
            <input
              type="number"
              id="rating"
              name="rating"
              className="form-control"
              min="1"
              max="5"
              value={formData.rating}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary px-4">Submit Comment</button>
        </div>
      </form>
    </div>
  );
}
