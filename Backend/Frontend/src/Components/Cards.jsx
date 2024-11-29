
// eslint-disable-next-line react/prop-types
function Cards({item}) {
  
  return (
    <>
      <div className="mt-5 my-5 p-3">
      <div className="card bg-base-100 w-92 shadow-xl cursor-pointer hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  flex justify-between">
      <div className="badge badge-outline cursor-pointer">${item.price}</div>
      <div className="px-2 py-1 rounded-full border border-[2px] border-white  cursor-pointer hover:bg-yellow-500 duration-200 text-white">Buy Now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards