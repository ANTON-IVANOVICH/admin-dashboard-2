import { FC } from 'react';
import ProductComponent from '../../components/Product';
import { IProduct } from '../../models/IProduct';
import { Button } from '@material-ui/core';
import {
    useFetchAllProductsQuery,
    useDeleteProductMutation,
    useUpdateProductMutation,
} from '../../store/services/serviceAPI';
import './productList.scss';

const ProductList: FC = () => {
    const {
        data: products,
        isError,
        isLoading,
        refetch,
    } = useFetchAllProductsQuery('');
    const [deleteProduct] = useDeleteProductMutation();
    const [updateProduct] = useUpdateProductMutation();

    const handleUpdate = (product: IProduct) => {
        updateProduct(product);
    };

    const handleDelete = (product: IProduct) => {
        deleteProduct(product);
    };

    if (isLoading) return <h2>Loading...</h2>;

    if (isError) return <h2>Error!!!</h2>;

    return (
        <div className='productslist'>
            <h2>Product List</h2>
            <ul className='productslist__list'>
                {products.map((product: IProduct) => (
                    <ProductComponent
                        key={product.id}
                        productItem={product}
                        remove={handleDelete}
                        update={handleUpdate}
                    />
                ))}
            </ul>
            <Button onClick={refetch} variant='contained'>
                Refetch data
            </Button>
        </div>
    );
};

export default ProductList;

// import { FC } from 'react';
// import PostItem from '../PostItem';
// import { postAPI } from '../../services/PostService';
// import { Post } from '../../models/Post';
// import { Button } from '@material-ui/core';
// import './postsList.scss';

// const PostsList: FC = () => {
// const { data: posts, isError, isLoading, refetch } = postAPI.useFetchAllUsersQuery('');
// const [deletePost] = postAPI.useDeletePostMutation();
// const [updatePost] = postAPI.useUpdatePostMutation();

// const handleUpdate = (post: Post) => {
//   updatePost(post)
// }

// const handleDelete = (post: Post) => {
//   deletePost(post)
// }

// if (isLoading) return <h2>Loading...</h2>;

// if (isError) return <h2>Error!!!</h2>;

//   return (
// <div className='postslist'>
//   <h2>Posts List</h2>
//   <ul className='postslist__list'>
//     {
//       posts.map((post: Post) => (
//         <PostItem key={post.id} post={post} remove={handleDelete} update={handleUpdate}/>
//       ))
//     }
//   </ul>
//   <Button onClick={refetch} variant="contained">Refetch data</Button>
// </div>
//   );
// };

// export default PostsList;
