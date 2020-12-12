import Swiper from 'react-native-swiper-hooks'

const _renderList = ()=>{
    let listData = [
        {
          title:'1',
          bgColor:'#f00'
        },
        {
          title:'2',
          bgColor:'#0f0'
        },
        {
          title:'3',
          bgColor:'#00f'
        },
      ]
      return (
        listData.map((item,idx)=>{
          return (
            <View style={{width:WIDTH,height:300,backgroundColor:item.bgColor,justifyContent: 'center',alignItems: 'center'}} key={idx}>
                <Text>{item.title}</Text>
            </View>
          )
        })
      )
  }
  
  
  
  <Swiper height={300}
          autoplay={true}
          loop={true}
          showPagination={true}
          >
    {_renderList()}
  </Swiper>
  
  