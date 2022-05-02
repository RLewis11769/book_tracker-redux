// Shape of objects

export interface BookShape {
  title: string;
  author: string;
  genre: {
    name: string;
    icon: string;
    color: string;
  }
  createdAt: Date;
}

export interface GenreShape {
  name: string;
  icon: string;
  color: string;
}

export interface FormValues {
  title: string;
  author: string;
}

// Shape of state/store

export interface RootState {
  bookList: BookShape[];
  query: string;
}

// Props passed to components

export interface BookProps {
  book: BookShape;
  notifyMessage: () => void;
}

export interface ModalProps {
  isOpen: boolean;
}
