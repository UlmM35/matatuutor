import { useState } from 'react'
import Button from '../Button/Button'
import './ProfileModal.css'

const ProfileModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    subject: '',
    price: ''
  })

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({ name: '', education: '', subject: '', price: '' }) // Reset form
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2>Lisa profiil</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nimi</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Haridus</label>
            <input
              type="text"
              name="email"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Eriala</label>
            <input
              type="text"
              name="phone"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Hind</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div className="modal-buttons">
            <Button type="button" size={'red-btn'} onClick={onClose} className="btn-cancel" text={"Tuhista"}/>
            <Button type="submit" size={'btn'} className="btn-submit" text={"Salvesta"}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileModal
