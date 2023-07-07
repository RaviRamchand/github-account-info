import './App.css';

/**
 * 
 * @param {*} param0 - The object parameter
 * @param {string} param0.name - The name property.
 * @param {string} param0.image - The image property.
 * @param {string} param0.bio - The bio property.
 * @param {number} param0.followers - The followers property.
 * @param {number} param0.following - The following property.
 * @param {string} param0.url - The URL property.
 * @param {string} param0.blog - The blog property.
 * 
 * @returns Displays the data from the API 
 */
function GetData({ name, image, bio, followers, following, url, blog }) {

    return (
        <div>
            <span className='ImageAndName'>
                <a href={url} target='_blank'><img src={image} height={150} /></a>
                <p>{name}</p>
                <p>{bio}</p>
                <span className='follows'>
                    <p>Following: {following}</p>
                    <p>Followers: {followers}</p>
                </span>
                <a href={blog} target='_blank'>Blog/LinkedIn</a>
            </span>
        </div>
    );
}

export default GetData;