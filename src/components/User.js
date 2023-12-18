const User = ( {Name}) =>{
    return(
        <div className="user-card">
            <h1>Name:{Name}</h1>
            <h3>location:Bengaluru</h3>
            <h3>Contact:@xyz</h3>
        </div>
    );
};

export default User;