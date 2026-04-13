import { useDispatch, useSelector } from 'react-redux';
import { findAll, findById, save } from '../api/bookApi'; // save 추가
import { setError, setLoading, setVo, setVoList } from '../store/bookSlice';

export default function useBook() {
  const dispatch = useDispatch();
  const { error, loading, vo, voList } = useSelector((state) => state.book);

  // 1. 전체 목록 조회
  async function fetchBookVoList() {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      const resp = await findAll();
      dispatch(setVoList(resp.data));
    } catch (e) {
      dispatch(setError(e));
      alert('리스트 조회 실패');
    } finally {
      dispatch(setLoading(false));
    }
  }

  // 2. 상세 조회
  async function fetchBookVoById(id) {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      const resp = await findById(id);
      dispatch(setVo(resp.data));
    } catch (e) {
      dispatch(setError(e));
    } finally {
      dispatch(setLoading(false));
    }
  }

  // 3. 도서 등록 (추가된 메서드)
  async function insertBookVo(bookData) {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const resp = await save(bookData); // api의 save 호출

      if (resp.status === 201 || resp.status === 200) {
        return true;
      }
    } catch (e) {
      dispatch(setError(e));
      alert('도서 등록 실패');
      return false;
    } finally {
      dispatch(setLoading(false));
    }
  }

  return {
    error,
    loading,
    vo,
    voList,
    fetchBookVoList,
    fetchBookVoById,
    insertBookVo, // 메서드 이름 확인!
  };
}
