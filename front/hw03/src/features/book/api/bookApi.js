import api from '../../../app/api/axios';

export async function save(vo) {
  return await api.post(`/book`, vo);
}

export async function findAll() {
  return await api.get(`/book`);
}

export async function findById(id) {
  return await api.get(`/book/${id}`);
}

export async function deleteById(id) {
  return await api.delete(`/book/${id}`);
}

export async function updateTitleAndPriceById(vo) {
  return await api.put(`/book/${vo.id}`, vo);
}
